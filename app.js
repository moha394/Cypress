

class DataDriven
{

  GetData(){
          const CSVTOJSON = require("csvtojson");
          const JSONTOCSV = require("json2csv");
          //const FileSystem= require("fs");
          CSVTOJSON().fromFile("./testData.csv").then(source =>{

            return source
            

          });


}
}
export default DataDriven