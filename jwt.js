const jwt=require('jsonwebtoken');
const jwtAuthMdle=async (req,res,next)=>{
    if(!(req.headers.authorization)) 
        {
          return  res.status(401).json({error:'token not found'})
        }
    const token= req.headers.authorization.split(' ')[1];
    if(!token)
        {
           return res.status(401).json('unauthorized');
        }
    try {
       const decoded= jwt.verify(token,'RiM%d!D@n76S**h@!iH');
       req.user=decoded;
       next();
    } catch (error) {
        res.status(501).json({error:'inValid Token '});
       
    }
}
const gntJwt= async (uData)=>{
    try {
        const token= await jwt.sign(uData,'RiM%d!D@n76S**h@!iH',{expiresIn:3000})
        return token;
    } catch (error) {
        throw error;
    }
};
module.exports={gntJwt,jwtAuthMdle};