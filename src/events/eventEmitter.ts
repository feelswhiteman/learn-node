import events from "events";

const eventEmitter = new events.EventEmitter();

const screamHandler = () => {
    console.log("I hear a scream");
};

eventEmitter.on("scream", screamHandler);

eventEmitter.emit("scream");
