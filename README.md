problem_1:  I cannot fetch api in my restful api 

problem_2:  how to fetch github project rather than rebuild. not async
<img width="655" alt="螢幕截圖 2022-06-21 上午4 41 38" src="https://user-images.githubusercontent.com/85872659/174675156-6ab0ce4e-0222-411b-ad2e-7535b195363f.png">


<img width="549" alt="螢幕截圖 2022-06-21 上午4 32 29" src="https://user-images.githubusercontent.com/85872659/174674344-4d986457-6d91-489d-8c84-c4abf33140b3.png">
 
 restful api
 ```
var cors = require('cors')

const corsOptions = {
  origin: "*"
};

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/user", authRoute);
  app.use(
    "/api/secret",
    passport.authenticate("jwt", { session: false }),
    secretRoute
  );

  app.get('/get-all-post', (req,res)=>{
    Post.find({}).then((post)=>{
      console.log(post);
      res.send(post)
    }).catch((err)=>{
      console.log(err);
    })
   
  })

app.listen(PORT, 
    console.log(`listen on ${PORT}`))
 ```
