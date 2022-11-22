let arrayOfEmails = new Array(); let BlackList = new Array();
arrayOfEmails = ['1', '2', '3', '4', '5'];
BlackList = ['1', '3'];
console.log("All список имён:\n" + arrayOfEmails.join("|") );
console.log("Black список:\n" + BlackList.join("|") );
filter(arrayOfEmails, BlackList);
function filter(AllEmails, BlackList) {for (let i = 0; i < AllEmails.length; ++i) {for (let n = 0; n < BlackList.length; n++) {if (AllEmails[i] == BlackList[n]) {AllEmails.splice(i, 1); --i;}}}
console.log("White список:\n" + AllEmails.join("|") + "\n______"); }