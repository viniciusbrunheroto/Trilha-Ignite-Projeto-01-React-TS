import { Post, PostType } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


// array de objetos
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/viniciusbrunheroto.png",
      name: "Vinícius Brunheroto",
      role: "Web Developer @ TBRWeb",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date("2023-11-07 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare"},
    ],

    publishedAt: new Date("2023-11-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
             return (
             <Post 
              	key={post.id}
                post={post} 
             />
             )
          })}
        </main>
      </div>
    </div>
  );
}
