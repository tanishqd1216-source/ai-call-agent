import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashPassword } from "../src/lib/passwords.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const TEST_EMAIL = "operator@vetic.in";
const TEST_PASSWORD = "ChangeMe123!";

async function main() {
  const company = await prisma.company.upsert({
    where: { name: "Vetic Demo Clinic" },
    update: {},
    create: { name: "Vetic Demo Clinic" },
  });

  await prisma.user.upsert({
    where: { email: TEST_EMAIL },
    update: {},
    create: {
      email: TEST_EMAIL,
      passwordHash: await hashPassword(TEST_PASSWORD),
      name: "Operator",
      companyId: company.id,
    },
  });

  const departments = [
    { slug: "sales", name: "Sales", sortOrder: 0, agents: [{ name: "Inbound Sales Agent" }] },
    { slug: "hr", name: "HR", sortOrder: 1, agents: [{ name: "HR Helpdesk Agent" }] },
    {
      slug: "customer-support",
      name: "Customer Support",
      sortOrder: 2,
      agents: [
        { name: "Inbound Agent", launchUrl: "/inbound" },
        { name: "Outbound Agent", launchUrl: "/outbound" },
      ],
    },
  ];

  for (const dept of departments) {
    const department = await prisma.department.upsert({
      where: { slug: dept.slug },
      update: { name: dept.name, sortOrder: dept.sortOrder },
      create: { slug: dept.slug, name: dept.name, sortOrder: dept.sortOrder },
    });

    for (const [index, agent] of dept.agents.entries()) {
      const existing = await prisma.agent.findFirst({
        where: { departmentId: department.id, name: agent.name },
      });
      const launchUrl = agent.launchUrl ?? null;
      if (existing) {
        await prisma.agent.update({ where: { id: existing.id }, data: { sortOrder: index, launchUrl } });
      } else {
        await prisma.agent.create({
          data: { name: agent.name, departmentId: department.id, sortOrder: index, launchUrl },
        });
      }
    }
  }

  console.log("Seed complete.");
  console.log(`Company: ${company.name}`);
  console.log(`Test login -> email: ${TEST_EMAIL}  password: ${TEST_PASSWORD}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
