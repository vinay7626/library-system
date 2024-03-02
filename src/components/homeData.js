import bookcover from "../images/bookcover.png";


    const announcements = [
          "Library will be closed on Monday for maintenance",
          "New books added to the collection. Check them out!",
          "Join us for a special author talk on Wednesday at 6pm",
          "Reminder: Library cards need to be renewed by the end of the month",
          "Kids storytelling session every Saturday at 10am",
          "Library will be hosting a book sale next week. Don't miss out!",
          "Learn how to use the library's online resources at our workshop on Friday",
          "Calling all book club members: our next meeting is on Thursday",
          "Library will be open until 9pm on Fridays starting next month",
          "Join our summer reading program and win exciting prizes"
    ]
    const events = [
        {
          type: "Workshop",
          description: "Learn how to knit a scarf",
          date: "2020-02-15"
        },
        {
          type: "Book club",
          description: "Discussing 'To Kill a Mockingbird'",
          date: "2020-02-18"
        },
        {
          type: "Author talks",
          description: "Hear from renowned author Jane Austen",
          date: "2020-02-20"
        },
        {
          type: "Workshop",
          description: "Introduction to watercolor painting",
          date: "2020-02-22"
        },
        {
          type: "Book club",
          description: "Exploring the works of Agatha Christie",
          date: "2020-02-25"
        },
        {
          type: "Author talks",
          description: "In conversation with Stephen King",
          date: "2020-02-28"
        },
        {
          type: "Workshop",
          description: "Learn the basics of coding in Python",
          date: "2020-03-02"
        },
        {
          type: "Book club",
          description: "Discussing 'Pride and Prejudice'",
          date: "2020-03-05"
        },
        {
          type: "Author talks",
          description: "Hear from acclaimed writer J.K. Rowling",
          date: "2020-03-08"
        },
        {
          type: "Workshop",
          description: "Introduction to calligraphy",
          date: "2020-03-10"
        }
      ]

      const books = [
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          image: bookcover
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          image: bookcover
        },
        {
          title: "1984",
          author: "George Orwell",
          image: bookcover
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          image: bookcover
        },
        {
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          image: bookcover
        },
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          image: bookcover
        }
      ]

export {announcements,events,books}