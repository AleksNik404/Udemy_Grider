import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';

import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

import { HtmlReport } from './reportTargets/HtmlReport';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();

summary.buildAndPrintReport(matchReader.matches);
