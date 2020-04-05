MongoDB - nodejs(for windows user)
======================

- there are two table(ques, board)
- there are two user(quesUser, boardUser)
<pre><code> 

├── ques                     
│   ├── personalInfo  - it is connected on Node js server.         
├── board         
│   ├── user
|   ├── boardContent

</code></pre>
Before start, you must download "data.zip" and Unzip.
download link - https://drive.google.com/file/d/1_GjAI7idwomUD8H1VyFRkwvwyrF7KW85/view?usp=sharing

Now, Let's start!

1. create volume named "mongodbdata".
<pre><code> $ docker volume create mongodbdata </code></pre>

2. run docker-compose.
<pre><code> $ docker-compose up -d </code></pre>

3. move 'data' to container.
<pre><code> $ docker cp ./data mongo:. </code></pre>

4. restart docker
<pre><code> $ docker-compose restart </code></pre>

* you can use api of nodejs using 'Post Man'
