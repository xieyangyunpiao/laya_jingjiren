/*
* tang 通用函数;
*/
class CUtil{
    constructor(){

    }


    public static Log(str:string)
    {
        
        GameConfig.DEBUG_MODE && console.log(str);
    }


       /**
     * 数组的多属性排序
     * @param sourceArr 原数组
     * @param sortAttr 属性数组 [{attrname:...},{attrname:...,method:<||>}];
     */
    public static MapMultAttrbuteSort(sourceArr:Array<any>,sortAttr:Array<any>):Array<any>
    {
               let attrbute:Object = sortAttr[0];
               let index:any;
               let tempob:Object;
               let battleOne:any
               let maxValue:any
               let contiuneBool:Boolean = true;
               for(let i = 0;i < sourceArr.length;i++)
               {
                    index = i ;
                    for(let j = i+1;j < sourceArr.length ;j++)
                    {
                        contiuneBool = true;
                        for(let z=0; z < sortAttr.length;z++)
                        {
                             if(false == contiuneBool)
                                break;
                             battleOne =sourceArr[j][sortAttr[z]["attrname"]];
                             maxValue =sourceArr[index][sortAttr[z]["attrname"]]; 
                             switch(sortAttr[z]["method"])
                              {  //method 指定排序方式是由大到小还是由小到大
                                  case ">":
                                  if(battleOne > maxValue)
                                  {
                                     index = j;
                                     contiuneBool = false
                                  }
                                  else if(battleOne ==  maxValue)
                                     contiuneBool = true;
                                  else 
                                     contiuneBool = false
                                  break;
                                  case "<":
                                    if(battleOne < maxValue)
                                    {
                                     contiuneBool = false
                                     index = j;
                                    }
                                  else if(battleOne ==  maxValue)
                                     contiuneBool = true;
                                  else 
                                     contiuneBool = false;
                                  break;
                              }
                        }
                    }
                         tempob = sourceArr[i];
                         sourceArr[i] = sourceArr[index];
                         sourceArr[index] =tempob;    
               }
               return sourceArr;
    } 
}