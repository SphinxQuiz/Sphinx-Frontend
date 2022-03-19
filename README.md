<div align="center">

  <h1>Sphinx quiz</h1>
  
  ![Alt Text](https://media.giphy.com/media/unzR48isp6cCY/giphy.gif)
  
</div>

<h1>Why ?</h1>

<p>Learning new thing is always a fun thing right ?</p>
<p> I love the game trivial pursuit and i wanted to make an application where I could learn new things with some cool features like a leaderboard and some stats.</p>

<h1>How does it work ?</h1>

<h2> Languages  🧬</h2>
<p>I didn't want to code my website using PHP or Mysql as we learned with the IUT. I wanted to first of all learn something new and more important some recent technologies. That's why i decided to learn how to build node js api and mongo db</p>
<p>I learned node js and mongodb with open classroom and I love it !</p>

<h2> Network  🌐</h2>

<p> The front end for this website is also hosted on my raspberry pi. </p>
<p> Basically, each one of my website is in it's own docker container on different ports of the raspberry. I have apache running on the raspberry itself and i created 2 virtual host (for port 80 and 443) which redirect to the localhost port of each site</p>
<p>So when it catches a request the raspberry pi will redirect to either one or the other container by looking at the url of the request</p>
<p>I'm also using github action as a CI CD pipeline, this way on each push on the main branch my website are updated !</p>
<p>I also use cloudflare as a dns proxy to hide my house ip address</p> 

<h1> Next steps : </h1>

<ul>
  <li>Improve the quiz page by adding a category selection and a timer ⏱</li>
  <li>Add profile pictures for each players 🌌</li>
  <li>Improve the email part 📩</li>
</ul>






