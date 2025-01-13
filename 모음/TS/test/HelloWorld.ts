import * as _ from "lodash";
class Startup{
    public static main(): number{
        const group = _.groupBy(['one' , 'twe']);
        console.log(group);
        return 0;
    }
}
Startup.main();