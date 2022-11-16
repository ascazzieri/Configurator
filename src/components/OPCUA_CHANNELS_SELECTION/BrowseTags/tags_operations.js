const dummy_tags = {
    "Channel1.Device1.R Registers.Boolean1": true,
    "Channel1.Device1.R Registers.Boolean2": true,
    "Channel1.Device1.R Registers.Boolean3": true,
    "Channel1.Device1.R Registers.Boolean4": true,
    "Channel1.Device1.R Registers.Byte1": true,
    "Channel1.Device1.R Registers.Byte2": true,
    "Channel1.Device1.R Registers.Byte3": true,
    "Channel1.Device1.R Registers.Byte4": true,
    "Channel1.Device1.R Registers.ByteArray": true,
    "Channel1.Device1.R Registers.Char1": true,
    "Channel1.Device1.R Registers.Char2": true,
    "Channel1.Device1.R Registers.Char3": true,
    "Channel1.Device1.R Registers.Char4": true,
    "Channel1.Device1.R Registers.CharArray": true,
    "Channel1.Device1.R Registers.Double1": true,
    "Channel1.Device1.R Registers.Double3": true,
    "Channel1.Device1.R Registers.Double4": true,
    "Channel1.Device1.R Registers.DoubleArray": true,
    "Channel1.Device1.R Registers.DWord1": true,
    "Channel1.Device1.R Registers.DWord2": true,
    "Channel1.Device1.R Registers.DWord3": true,
    "Channel1.Device1.R Registers.DWord4": true,
    "Channel1.Device1.R Registers.DWordArray": true,
    "Channel1.Device1.R Registers.Float1": true,
    "Channel1.Device1.R Registers.Float2": true,
    "Channel1.Device1.R Registers.Float3": true,
    "Channel1.Device1.R Registers.Float4": true,
    "Channel1.Device1.R Registers.FloatArray": true,
    "Channel1.Device1.R Registers.LLong1": true,
    "Channel1.Device1.R Registers.LLong2": true,
    "Channel1.Device1.R Registers.LLong3": true,
    "Channel1.Device1.R Registers.LLong4": true,
    "Channel1.Device1.R Registers.LLongArray": true,
    "Channel1.Device1.R Registers.Long1": true,
    "Channel1.Device1.R Registers.Long2": true,
    "Channel1.Device1.R Registers.Long3": true,
    "Channel1.Device1.R Registers.Long4": true,
    "Channel1.Device2.R Registers.LongArray": true,
    "Channel1.Device2.R Registers.QWord1": true,
    "Channel1.Device2.R Registers.QWord2": true,
    "Channel1.Device2.R Registers.QWord3": true,
    "Channel1.Device2.R Registers.QWord4": true,
    "Channel1.Device2.R Registers.QWordArray": true,
    "Channel1.Device2.R Registers.Short1": true,
    "Channel1.Device2.R Registers.Short2": true,
    "Channel1.Device2.R Registers.Short3": true,
    "Channel1.Device2.R Registers.Short4": true,
    "Channel1.Device2.R Registers.ShortArray": true,
    "Channel1.Device2.R Registers.test_array": true,
    "Channel1.Device2.R Registers.Word1": true,
    "Channel1.Device2.R Registers.Word2": true,
    "Channel1.Device2.R Registers.Word3": true,
    "Channel1.Device2.R Registers.Word4": true,
    "Channel1.Device2.R Registers.WordArray": true,
    "Channel1.Device2.R Registers.Double2": true,
    "Channel2.Device1.R Registers.Boolean1": true,
    "Channel2.Device1.R Registers.Boolean2": true,
    "Channel2.Device1.R Registers.Boolean3": true,
    "Channel2.Device1.R Registers.Boolean4": true,
    "Channel2.Device1.R Registers.Byte1": true,
    "Channel2.Device1.R Registers.Byte2": true,
    "Channel2.Device1.R Registers.Byte3": true,
    "Channel2.Device1.R Registers.Byte4": true,
    "Channel2.Device1.R Registers.ByteArray": true,
    "Channel2.Device1.R Registers.Char1": true,
    "Channel2.Device1.R Registers.Char2": true,
    "Channel2.Device1.R Registers.Char3": true,
    "Channel2.Device1.R Registers.Char4": true,
    "Channel2.Device1.R Registers.CharArray": true,
    "Channel2.Device1.R Registers.Double1": true,
    "Channel2.Device1.R Registers.Double3": true,
    "Channel2.Device1.R Registers.Double4": true,
    "Channel2.Device1.R Registers.DoubleArray": true,
    "Channel2.Device1.R Registers.DWord1": true,
    "Channel2.Device1.R Registers.DWord2": true,
    "Channel2.Device1.R Registers.DWord3": true,
    "Channel2.Device1.R Registers.DWord4": true,
    "Channel2.Device1.R Registers.DWordArray": true,
    "Channel2.Device1.R Registers.Float1": true,
    "Channel2.Device1.R Registers.Float2": true,
    "Channel2.Device2.R Registers.Float3": true,
    "Channel2.Device2.R Registers.Float4": true,
    "Channel2.Device2.R Registers.FloatArray": true,
    "Channel2.Device2.R Registers.LLong1": true,
    "Channel2.Device2.R Registers.LLong2": true,
    "Channel2.Device2.R Registers.LLong3": true,
    "Channel2.Device2.R Registers.LLong4": true,
    "Channel2.Device2.R Registers.LLongArray": true,
    "Channel2.Device2.R Registers.Long1": true,
    "Channel2.Device2.R Registers.Long2": true,
    "Channel2.Device2.R Registers.Long3": true,
    "Channel2.Device2.R Registers.Long4": true,
    "Channel2.Device2.R Registers.LongArray": true,
    "Channel2.Device2.R Registers.QWord1": true,
    "Channel2.Device2.R Registers.QWord2": true,
    "Channel2.Device2.R Registers.QWord3": true,
    "Channel2.Device2.R Registers.QWord4": true,
    "Channel2.Device2.R Registers.QWordArray": true,
    "Channel2.Device2.R Registers.Short1": true,
    "Channel2.Device2.R Registers.Short2": true,
    "Channel2.Device2.R Registers.Short3": true,
    "Channel2.Device2.R Registers.Short4": true,
    "Channel2.Device2.R Registers.ShortArray": true,
    "Channel2.Device2.R Registers.test_array": true,
    "Channel2.Device2.R Registers.Word1": true,
    "Channel2.Device2.R Registers.Word2": true,
    "Channel2.Device2.R Registers.Word3": true,
    "Channel2.Device2.R Registers.Word4": true,
    "Channel2.Device2.R Registers.WordArray": true,
    "Channel2.Device1.R Registers.Double2": true,
    "_AdvancedTags.a4GATE_B_SiteManager": true,
    "_AdvancedTags.a4GATE_B_tfhttpxferb": true,
    "_AdvancedTags.a4GATE_SiteManager_Color": true,
    "_AdvancedTags.a4GATE_SiteManager_Status": true,
    "_AdvancedTags.a4GATE_U2U_BIDIR": true,
    "_AdvancedTags.a4GATE_U2U_RT": true,
    "_ConnectionSharing": true,
    "_CustomAlarms": true,
    "_DataLogger": true,
    "_EFMExporter": true,
    "_IDF_for_Splunk": true,
    "_IoT_Gateway.EMS_template": true,
    "_IoT_Gateway.HTTP_Data Type Examples_16 Bit Device": true,
    "_IoT_Gateway.Internal": true,
    "_IoT_Gateway.TWA_template": true,
    "_LocalHistorian": true,
    "_Redundancy": true,
    "_Scheduler": true,
    "_SecurityPolicies": true,
    "_SNMP Agent": true,
    "_System": true,
    "_ThingWorx": true,
}

const find_tags = () => {

    //http requests

    return dummy_tags
}

const get_tags = () => {


    let mapper = {};
    let root = { children: [] };

    for (const str of Object.keys(find_tags())) {
        let splits = str.split('.'),
            key = '';

        splits.reduce((parent, title, i) => {
            key += `${title}.`;

            if (!mapper[key]) {
                const o = { title, key };
                mapper[key] = o; // set the new object with unique path
                parent.children = parent.children || [];
                parent.children.push(o)
            }

            return mapper[key];
        }, root)
    }


    /*  let data = Object.keys(mapper)
     const res = []
     data.forEach((obj, index) => {
         obj.trim().split('.').reduce((r, e, i, a) => {
             let item = {};
             item.title = a[a.length];
             item.key = '';
             for (let i = 0; i < a.length; i++) {
                 item.key += `${a[i]}`
             }
             console.log(a)
         }, res)
     })
     console.log(res) */

    /* let data = [];

    Object.keys(root.children).map((element, index) => {

        let item = {};
        item.title = root.children[index].title;
        item.key = root.children[index].key;
        item.children = []
        if (root.children[index].children !== undefined) {
            root.children[index].children.map((child_1, index_1) => {
                let child1 = {};
                child1.title = child_1.title;
                child1.key = child_1.key;
                child1.children = []

                item.children.push(child1)
            })

        }

        data.push(item)

    })

    console.log(data)
    let aspetta = []

    return aspetta
 */


    /*    let tagTree = {
           children: [],
           people: [],
           key: ''
       };
   
       let data = Object.keys(mapper)
       const res = []
       data.forEach((obj, index) => {
           obj.split('.').reduce((r, e, i, a) => {
               const match = r.find(({ title }) => title === e);
               if (!match) {
                   const o = Object.create(tagTree);
                   o.title = e;
                   o.children = [];
                   o.key = (i === 0 ? Math.random() : (i === 1 ? `${a[i - 1]}.${e}` : (i === 2 ? `${a[i - 2]}.${a[i - 1]}.${e}` : (i === 3 ? `${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 4 ? `${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 5 ? `${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 6 ? `${a[i - 6]}.${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 7 ? `${a[i - 7]}.${a[i - 6]}.${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 8 ? `${a[i - 8]}.${a[i - 7]}.${a[i - 6]}.${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 9 ? `${a[i - 9]}.${a[i - 8]}.${a[i - 7]}.${a[i - 6]}.${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : (i === 10 ? `${a[i - 10]}.${a[i - 9]}.${a[i - 8]}.${a[i - 7]}.${a[i - 6]}.${a[i - 5]}.${a[i - 4]}.${a[i - 3]}.${a[i - 2]}.${a[i - 1]}.${e}` : Math.random())))))))))))
                   r.push(o)
                   return r;
               } else {
          
                   return match.children
               }
           }, res)
       })
       return res; */

    return root.children


}

export { find_tags, get_tags }



