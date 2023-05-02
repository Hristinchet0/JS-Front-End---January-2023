function solve(data) {

    const NumbersOfInputs = Number(data[0]);

    let spirBoard = {};

    let allTasksTotalPoints = new Map;

    allTasksTotalPoints.set("ToDo", 0);

    allTasksTotalPoints.set("In Progress", 0);
    allTasksTotalPoints.set("Code Review", 0);

    allTasksTotalPoints.set("Done", 0);

    for (let k = 1; k <= NumbersOfInputs; k++) {
        const [assignee, taskId, title, status, estimatedPoints] = data[k].split(':');
        if (!spirBoard[assignee]) spirBoard[assignee] = [];

        spirBoard[assignee].push({taskId, title, status, estimatedPoints: Number(estimatedPoints)});

        currentPoint = allTasksTotalPoints.get(status) + Number(estimatedPoints);
        allTasksTotalPoints.set(status, currentPoint);
    }

    for (let j = NumbersOfInputs + 1; j < data.length; j++) {
        const [command, assignee, taskId, ...args] = data[j].split(':');

        if (command === 'Add New') {

            const [title, status, estimatedPoints] = args;
            const task = {taskId, title, status, estimatedPoints: Number(estimatedPoints)};

            if (!spirBoard[assignee]) {

                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                spirBoard[assignee].push(task);

                let point = Number(allTasksTotalPoints.get(task.status)) + Number(estimatedPoints);

                allTasksTotalPoints.set(task.status, point);
            }
        } else if (command === 'Change Status') {
            const [newStatus] = args;

            if (!spirBoard[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);

            } else {

                const taskBoard = spirBoard[assignee].find(t => t.taskId === taskId);

                if (!taskBoard) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    let currentPoint = Number(allTasksTotalPoints.get(taskBoard.status)) - taskBoard.estimatedPoints;
                    allTasksTotalPoints.set(taskBoard.status, currentPoint);
                    taskBoard.status = newStatus;
                    currentPoint = allTasksTotalPoints.get(taskBoard.status) + taskBoard.estimatedPoints;
                    allTasksTotalPoints.set(taskBoard.status, currentPoint);
                }
            }
        } else if (command === 'Remove Task') {
            const index = parseInt(taskId);
            if (!spirBoard[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else if (index < 0 || index >= spirBoard[assignee].length) {
                console.log(`Index is out of range!`);
            } else {
                const currenttask = spirBoard[assignee][index];
                let currentPoint = Number(allTasksTotalPoints.get(currenttask.status)) - currenttask.estimatedPoints;
                allTasksTotalPoints.set(currenttask.status, currentPoint);
                spirBoard[assignee].splice(index, 1);
            }
        }
    }

    console.log(`ToDo: ${allTasksTotalPoints.get("ToDo")}pts`);
    console.log(`In Progress: ${allTasksTotalPoints.get("In Progress")}pts`);

    console.log(`Code Review: ${allTasksTotalPoints.get("Code Review")}pts`);
    console.log(`Done Points: ${allTasksTotalPoints.get("Done")}pts`);

    if (allTasksTotalPoints.get("Done") >= allTasksTotalPoints.get("ToDo") + allTasksTotalPoints.get("In Progress") + allTasksTotalPoints.get("Code Review")) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

}