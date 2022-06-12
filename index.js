const fs = require("fs");
const key = "TA ";
const typesIssue = ["Bug", "Story"];
const issueCount = 100;
const users = [
  "sxrxkn@mail.ru",
  "kseniya.go2115@gmail.com",
  "irina.kulakova.ru@mail.ru",
  "maks.greb2@gmail.com",
  "dmitriy.bubenin@gmail.com",
  "alexander.soulimov@gmail.com",
];
let endDate;

const obj = {
  data: {
    total: issueCount,
    issues: [],
  },
};

function randomStartDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function randomEndDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

for (let i = 0; i < issueCount; i++) {
  const rndIssue = Math.floor(Math.random() * typesIssue.length);
  const rndUser = Math.floor(Math.random() * users.length);
  //   const rndStatus = Math.floor(Math.random() * status.length)

  const startDate = randomStartDate(
    new Date(2022, 0, 1),
    new Date(2022, 5, 31)
  );
  const tmpDate = randomEndDate(new Date(2022, 5, 1), new Date(2022, 6, 3));

  if (tmpDate >= startDate) {
    endDate = tmpDate;
  } else if (tmpDate < startDate) {
    endDate = null;
  }

  const newObj = {
    key: key + [i],
    fields: {
      issuetype: {
        name: typesIssue[rndIssue],
      },
      created: startDate,
      resolutiondate: endDate,
      assignee: {
        emailAddress: users[rndUser],
      },
    },
  };
  obj.data.issues.push(newObj);
}
console.log(obj);
fs.writeFileSync("data.json", JSON.stringify(obj));
