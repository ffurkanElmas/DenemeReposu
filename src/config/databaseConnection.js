const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_CONNECTION_STRING , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Veritabanına başarıyla bağlanıldı.");
}).catch((err) => {
    console.log("Veritabanına bağlantı başarısız oldu:" + err)
})