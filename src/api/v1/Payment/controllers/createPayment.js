const Payment = require("../../../../models/Payment");

const createPayment = async (req, res) => {
  try {
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

    const payment = req.body;
    const data = {
      ...payment,
      date,
      time,
    };

    const result = await Payment.create(data);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPayment;
