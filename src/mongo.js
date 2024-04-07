const mongoose = require("mongoose")
const Movie = require("./Movie")
const ContactInfo = require("./ContactInfo")


mongoose.connect('mongodb+srv://robins133:wulf60wnRDvBr3xj@cluster0.mtmjwqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

updateMovie()
//createContactInfo()

async function updateMovie()
{
    const movie = await Movie.create({title: "Batman", rating: 4})

    await movie.save()

    console.log(movie);
}

async function createContactInfo()
{
    const contactInfo = await ContactInfo.create({
        name: "Steve", 
        email: "test2@gmail.com",
        message: "Hey.",
        date: new Date()
    })

    await contactInfo.save()

    console.log(contactInfo);
}
