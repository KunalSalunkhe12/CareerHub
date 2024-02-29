import jwt from 'jsonwebtoken'
const auth = async(req, res, next)=>{
try{
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(404).json("User is not Authorized")
  let decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  req.userId = decodedToken?.id
 next()
}catch(error){
  console.log(error)
}
}
export default auth;