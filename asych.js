var logging = async (log) => {
    throw new Error("invalid");
    return "Akash";
}
logging().then((name) => {
    console.log(name);
}).catch((e) => {
    console.log(e);
});
logging(2);