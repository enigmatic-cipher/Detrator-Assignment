import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    setPosts(response.data.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Posts...
      </Typography>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Card sx={{ width: 1000, maxWidth: "100%", margin: "20px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {post.id}
                    {"."}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2">{post.body}</Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
