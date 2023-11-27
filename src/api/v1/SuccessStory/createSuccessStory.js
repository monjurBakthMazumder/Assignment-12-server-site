const SuccessStory = require("../../../models/SuccessStory");

const createSuccessStory = async (req, res) => {
    try {
        console.log('object');
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    let period = "AM";
    let formattedHours12 = formattedHours;

    if (formattedHours > 12) {
      formattedHours12 = formattedHours - 12;
      period = "PM";
    }

    const date = `${year}-${formattedMonth}-${formattedDay}`;
    const time = `${formattedHours12}:${formattedMinutes}:${formattedSeconds} ${period}`;

    const data = req.body;
    const successStory = {
      ...data,
      date,
      time,
    };
    const result = await SuccessStory.create(successStory);
    res.send(result);

    } catch (error) {
        console.log(error.message);
    }

  
};

module.exports = createSuccessStory;
