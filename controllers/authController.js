module.exports = {
    register : async(req, res)=>{
       try {
        return res.status(201).json({
            ok: true,
            msg: 'Usuario registrado'
        })
       } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Hubo un error en register!'
        })
       }
    },

    login : async(req, res)=>{
        try {
         return res.status(200).json({
             ok: true,
             msg: 'Usuario logueado'
         })
        } catch (error) {
         console.log(error);
         return res.status(error.status || 500).json({
             ok: false,
             msg: error.message || 'Hubo un error en Login!'
         })
        }
     },

     checked : async(req, res)=>{
        try {
         return res.status(201).json({
             ok: true,
             msg: 'Usuario checkeado'
         })
        } catch (error) {
         console.log(error);
         return res.status(error.status || 500).json({
             ok: false,
             msg: error.message || 'Hubo un error en checked!'
         })
        }
     },

     sendToken : async(req, res)=>{
        try {
         return res.status(200).json({
             ok: true,
             msg: 'Token enviado'
         })
        } catch (error) {
         console.log(error);
         return res.status(error.status || 500).json({
             ok: false,
             msg: error.message || 'Hubo un error en sendToken!'
         })
        }
     },

     verifyToken : async(req, res)=>{
        try {
         return res.status(200).json({
             ok: true,
             msg: 'Token verificado'
         })
        } catch (error) {
         console.log(error);
         return res.status(error.status || 500).json({
             ok: false,
             msg: error.message || 'Hubo un error en verifyToken!'
         })
        }
     },

     changePassword: async(req, res)=>{
        try {
         return res.status(200).json({
             ok: true,
             msg: 'Password actualizado'
         })
        } catch (error) {
         console.log(error);
         return res.status(error.status || 500).json({
             ok: false,
             msg: error.message || 'Hubo un error en changePassword!'
         })
        }
     }
     

}