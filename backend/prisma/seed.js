const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // --- Authors ---
  await prisma.author.createMany({
    data: [
      {
        firstName: "George",
        familyName: "Orwell",
        date_of_birth: new Date("1903-06-25"),
        date_of_death: new Date("1950-01-21"),
        name: "George Orwell",
        lifeSpan: "1903 - 1950",
        url: "george-orwell"
      },
      {
        firstName: "J.K.",
        familyName: "Rowling",
        date_of_birth: new Date("1965-07-31"),
        date_of_death: null,
        name: "J.K. Rowling",
        lifeSpan: "1965 - ",
        url: "jk-rowling"
      },
      {
        firstName: "Haruki",
        familyName: "Murakami",
        date_of_birth: new Date("1949-01-12"),
        date_of_death: null,
        name: "Haruki Murakami",
        lifeSpan: "1949 - ",
        url: "haruki-murakami"
      }
    ]
  });

  // --- Genres ---
  await prisma.genre.createMany({
    data: [
      { name: "Dystopian", url: "dystopian" },
      { name: "Fantasy", url: "fantasy" },
      { name: "Science Fiction", url: "science-fiction" },
      { name: "Magical Realism", url: "magical-realism" }
    ]
  });

  // Fetch IDs after createMany
  const genres = await prisma.genre.findMany();
  const authors = await prisma.author.findMany();

  // --- Books ---
  await prisma.book.createMany({
    data: [
      {
        title: "1984",
        summary: "A dystopian novel set in a surveillance state.",
        isbn: "9780451524935",
        url: "1984",
        authorid: authors.find(a => a.name === "George Orwell").authorid
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        summary: "A young wizard discovers his magical heritage.",
        isbn: "9780747532699",
        url: "hp-philosopher-stone",
        authorid: authors.find(a => a.name === "J.K. Rowling").authorid
      },
      {
        title: "Kafka on the Shore",
        summary: "A magical realism story interweaving two plot lines.",
        isbn: "9781400079278",
        url: "kafka-on-the-shore",
        authorid: authors.find(a => a.name === "Haruki Murakami").authorid
      }
    ]
  });

  const books = await prisma.book.findMany();

  // --- BookGenre Junction Table ---
  await prisma.bookGenre.createMany({
    data: [
      {
        bookid: books.find(b => b.title === "1984").bookid,
        genreid: genres.find(g => g.name === "Dystopian").genreid
      },
      {
        bookid: books.find(b => b.title === "Harry Potter and the Philosopher's Stone").bookid,
        genreid: genres.find(g => g.name === "Fantasy").genreid
      },
      {
        bookid: books.find(b => b.title === "Kafka on the Shore").bookid,
        genreid: genres.find(g => g.name === "Magical Realism").genreid
      }
    ]
  });

  console.log("🌱 Seeding completed!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
