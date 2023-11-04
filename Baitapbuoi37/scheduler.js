var cron = require("node-cron");
const model = require("./models/index");
const queue = model.QueueJob;
const { v4: uuid } = require("uuid");
const SendMail = require("./jobs/SendMail");

cron.schedule("*/5 * * * * *", async () => {
  const id = await queue.min("id");

  if (id) {
    const job = await queue.findOne({
      where: {
        id: id,
      },
    });
    const { name, email } = JSON.parse(job.value).data.job;

    new SendMail({ name, email });

    await queue.destroy({
      where: {
        id: id,
      },
    });
  } else {
    return;
  }
});
