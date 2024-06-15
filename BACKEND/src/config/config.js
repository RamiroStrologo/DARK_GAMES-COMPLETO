import { Command } from 'commander';

const program = new Command();

program.option('--mode <mode>', 'Entorno de trabajo', 'prod');

program.parse();

const enviroment = program.opts().mode;

export default enviroment;
