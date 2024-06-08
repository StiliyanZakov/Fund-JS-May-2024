function manageTseamAccount(input) {
    let account = input[0].split(' ');
    let commands = input.slice(1);

    for (let command of commands) {
        if (command === 'Play!') {
            break;
        }

        let [action, gameData] = command.split(' ');

        if (action === 'Install') {
            if (!account.includes(gameData)) {
                account.push(gameData);
            }
        } else if (action === 'Uninstall') {
            account = account.filter(game => game !== gameData);
        } else if (action === 'Update') {
            if (account.includes(gameData)) {
                account = account.filter(game => game !== gameData);
                account.push(gameData);
            }
        } else if (action === 'Expansion') {
            let [game, expansion] = gameData.split('-');
            let gameIndex = account.indexOf(game);
            if (gameIndex !== -1) {
                account.splice(gameIndex + 1, 0, `${game}:${expansion}`);
            }
        }
    }

    console.log(account.join(' '));
}

// Test cases
manageTseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
// Output: CS CS:Go LoL Diablo

manageTseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
// Output: CS Diablo WoW