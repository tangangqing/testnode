//84
if(devid=='84' &&  length==16 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var output1str=msg.payload[length-11].toString(16);
    var output1 = parseInt(output1str,16);
    jsonobj.k="WIRE-84.Output1";
    jsonobj.v=output1+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var output2str=msg.payload[length-10].toString(16);
    var output2 = parseInt(output2str,16);

    //var output = output1 + output2;
    jsonobj.k="WIRE-84.Output2";
    jsonobj.v=output2+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var e513FixtureDistinguishstr = msg.payload[length-9].toString(16);
    var e513FixtureDistinguish = parseInt(e513FixtureDistinguishstr,16);

    jsonobj.k="WIRE-84.E513FixtureDistinguish";
    jsonobj.v=e513FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var scramAlarmstr = msg.payload[length-8].toString(16);
    var scramAlarm = parseInt(scramAlarmstr,16);

    jsonobj.k="WIRE-84.ScramAlarm";
    jsonobj.v=scramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var x0DSafetyDoorAlarmstr = msg.payload[length-7].toString(16);
    var x0DSafetyDoorAlarm = parseInt(x0DSafetyDoorAlarmstr,16);

    jsonobj.k="WIRE-84.X0DSafetyDoorAlarm";
    jsonobj.v=x0DSafetyDoorAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var touchScreenScramAlarmstr = msg.payload[length-6].toString(16);
    var touchScreenScramAlarm = parseInt(touchScreenScramAlarmstr,16);

    jsonobj.k="WIRE-84.TouchScreenScramAlarm";
    jsonobj.v=touchScreenScramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorScramAlarmstr = msg.payload[length-5].toString(16);

    jsonobj.k="WIRE-84.SafetyDoorScramAlarm";
    jsonobj.v=safetyDoorScramAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var m5SafetyDoorAlarmtr = msg.payload[length-4].toString(16);

    jsonobj.k="WIRE-84.M5SafetyDoorAlarm";
    jsonobj.v=m5SafetyDoorAlarmtr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var robotAlarmstr = msg.payload[length-3].toString(16);

    jsonobj.k="WIRE-84.RobotAlarm";
    jsonobj.v=robotAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"


    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_84","currentdata":currentdatastr,"tcpdata":tcpdata})
}


//83
if(devid=='83' &&  length==16 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var output1str=msg.payload[length-12].toString(16);
    var output1 = parseInt(output1str,16);
    jsonobj.k="WIRE-83.Output1";
    jsonobj.v=output1+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var output2str=msg.payload[length-11].toString(16);
    var output2 = parseInt(output2str,16);

    //var output = output1 + output2;
    jsonobj.k="WIRE-83.Output2";
    jsonobj.v=output2+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var e513FixtureDistinguishstr = msg.payload[length-10].toString(16);
    var e513FixtureDistinguish = parseInt(e513FixtureDistinguishstr,16);

    jsonobj.k="WIRE-83.E513FixtureDistinguish";
    jsonobj.v=e513FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var compressedAirDischargeAlarmstr = msg.payload[length-9].toString(16);
    var compressedAirDischargeAlarm = parseInt(compressedAirDischargeAlarmstr,16);

    jsonobj.k="WIRE-83.CompressedAirDischargeAlarm";
    jsonobj.v=compressedAirDischargeAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var touchScreenScramAlarmstr = msg.payload[length-8].toString(16);
    var touchScreenScramAlarm = parseInt(touchScreenScramAlarmstr,16);

    jsonobj.k="WIRE-83.TouchScreenScramAlarm";
    jsonobj.v=touchScreenScramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var robotScramAlarmstr = msg.payload[length-7].toString(16);
    var robotScramAlarm = parseInt(robotScramAlarmstr,16);

    jsonobj.k="WIRE-83.RobotScramAlarm";
    jsonobj.v=robotScramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var robotAlarmstr = msg.payload[length-6].toString(16);

    jsonobj.k="WIRE-83.RobotAlarm";
    jsonobj.v=robotAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm1str = msg.payload[length-5].toString(16);

    jsonobj.k="WIRE-83.HandsTopsScramAlarm1";
    jsonobj.v=handsTopsScramAlarm1str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var protectedAirDischargeAlarmstr = msg.payload[length-4].toString(16);

    jsonobj.k="WIRE-83.ProtectedAirDischargeAlarm";
    jsonobj.v=protectedAirDischargeAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm2str = msg.payload[length-3].toString(16);

    jsonobj.k="WIRE-83.HandsTopsScramAlarm2";
    jsonobj.v=handsTopsScramAlarm2str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_83","currentdata":currentdatastr,"tcpdata":tcpdata})
}


//86
if(devid=='86' &&  length==16 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var output1str=msg.payload[length-12].toString(16);
    var output1 = parseInt(output1str,16);
    jsonobj.k="WIRE-86.Output1";
    jsonobj.v=output1+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var output2str=msg.payload[length-11].toString(16);
    var output2 = parseInt(output2str,16);

    //var output = output1 + output2;
    jsonobj.k="WIRE-86.Output2";
    jsonobj.v=output2+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var c201Processes5FixtureDistinguishstr = msg.payload[length-10].toString(16);
    var c201Processes5FixtureDistinguish = parseInt(c201Processes5FixtureDistinguishstr,16);

    jsonobj.k="WIRE-86.C201Processes5FixtureDistinguish";
    jsonobj.v=c201Processes5FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var v302Processes5FixtureDistinguishstr = msg.payload[length-9].toString(16);
    var v302Processes5FixtureDistinguish = parseInt(v302Processes5FixtureDistinguishstr,16);

    jsonobj.k="WIRE-86.V302Processes5FixtureDistinguish";
    jsonobj.v=v302Processes5FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var weldingMachineAlarmstr = msg.payload[length-8].toString(16);
    var weldingMachineAlarm = parseInt(weldingMachineAlarmstr,16);

    jsonobj.k="WIRE-86.WeldingMachineAlarm";
    jsonobj.v=weldingMachineAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var touchScreenScramAlarmstr = msg.payload[length-7].toString(16);
    var touchScreenScramAlarm = parseInt(touchScreenScramAlarmstr,16);

    jsonobj.k="WIRE-86.TouchScreenScramAlarm";
    jsonobj.v=touchScreenScramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorScramAlarmstr = msg.payload[length-6].toString(16);

    jsonobj.k="WIRE-86.SafetyDoorScramAlarm";
    jsonobj.v=safetyDoorScramAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm1str = msg.payload[length-5].toString(16);

    jsonobj.k="WIRE-86.HandsTopsScramAlarm1";
    jsonobj.v=handsTopsScramAlarm1str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm2str = msg.payload[length-4].toString(16);

    jsonobj.k="WIRE-86.HandsTopsScramAlarm2";
    jsonobj.v=handsTopsScramAlarm2str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorAlarmstr = msg.payload[length-3].toString(16);

    jsonobj.k="WIRE-86.SafetyDoorAlarm";
    jsonobj.v=safetyDoorAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_86","currentdata":currentdatastr,"tcpdata":tcpdata})
}

//87
if(devid=='87' &&  length==16 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var output1str=msg.payload[length-12].toString(16);
    var output1 = parseInt(output1str,16);
    jsonobj.k="WIRE-87.Output1";
    jsonobj.v=output1+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var output2str=msg.payload[length-11].toString(16);
    var output2 = parseInt(output2str,16);

    //var output = output1 + output2;
    jsonobj.k="WIRE-87.Output2";
    jsonobj.v=output2+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var c201BackDoorProcesses5FixtureDistinguishstr = msg.payload[length-10].toString(16);
    var c201BackDoorProcesses5FixtureDistinguish = parseInt(c201BackDoorProcesses5FixtureDistinguishstr,16);

    jsonobj.k="WIRE-87.C201BackDoorProcesses5FixtureDistinguish";
    jsonobj.v=c201BackDoorProcesses5FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var v302BackDoorProcesses5FixtureDistinguishstr = msg.payload[length-9].toString(16);
    var v302BackDoorProcesses5FixtureDistinguish = parseInt(v302BackDoorProcesses5FixtureDistinguishstr,16);

    jsonobj.k="WIRE-87.V302BackDoorProcesses5FixtureDistinguish";
    jsonobj.v=v302BackDoorProcesses5FixtureDistinguish+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var pointWeldingMachineAlarmstr = msg.payload[length-8].toString(16);
    var pointWeldingMachineAlarm = parseInt(pointWeldingMachineAlarmstr,16);

    jsonobj.k="WIRE-87.PointWeldingMachineAlarm";
    jsonobj.v=pointWeldingMachineAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var touchScreenScramAlarmstr = msg.payload[length-7].toString(16);
    var touchScreenScramAlarm = parseInt(touchScreenScramAlarmstr,16);

    jsonobj.k="WIRE-87.TouchScreenScramAlarm";
    jsonobj.v=touchScreenScramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorScramAlarmstr = msg.payload[length-6].toString(16);

    jsonobj.k="WIRE-87.SafetyDoorScramAlarm";
    jsonobj.v=safetyDoorScramAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm1str = msg.payload[length-5].toString(16);

    jsonobj.k="WIRE-87.HandsTopsScramAlarm1";
    jsonobj.v=handsTopsScramAlarm1str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm2str = msg.payload[length-4].toString(16);

    jsonobj.k="WIRE-87.HandsTopsScramAlarm2";
    jsonobj.v=handsTopsScramAlarm2str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var backwaterFlowInsufficientAlarmstr = msg.payload[length-3].toString(16);

    jsonobj.k="WIRE-87.BackwaterFlowInsufficientAlarm";
    jsonobj.v=backwaterFlowInsufficientAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_87","currentdata":currentdatastr,"tcpdata":tcpdata})
}


//85
if(devid=='85' &&  length==16 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var output1str=msg.payload[length-12].toString(16);
    var output1 = parseInt(output1str,16);
    jsonobj.k="WIRE-85.Output1";
    jsonobj.v=output1+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var output2str=msg.payload[length-11].toString(16);
    var output2 = parseInt(output2str,16);

    //var output = output1 + output2;
    jsonobj.k="WIRE-85.Output2";
    jsonobj.v=output2+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var scramAlarmstr = msg.payload[length-10].toString(16);
    var scramAlarm = parseInt(scramAlarmstr,16);

    jsonobj.k="WIRE-85.ScramAlarm";
    jsonobj.v=scramAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorAlarmstr = msg.payload[length-9].toString(16);
    var safetyDoorAlarm = parseInt(safetyDoorAlarmstr,16);

    jsonobj.k="WIRE-85.SafetyDoorAlarm";
    jsonobj.v=safetyDoorAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var compressedAirDischargeAlarmstr = msg.payload[length-8].toString(16);
    var compressedAirDischargeAlarm = parseInt(compressedAirDischargeAlarmstr,16);

    jsonobj.k="WIRE-85.CompressedAirDischargeAlarm";
    jsonobj.v=compressedAirDischargeAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var protectedAirDischargeAlarmstr = msg.payload[length-7].toString(16);
    var protectedAirDischargeAlarm = parseInt(protectedAirDischargeAlarmstr,16);

    jsonobj.k="WIRE-85.ProtectedAirDischargeAlarm";
    jsonobj.v=protectedAirDischargeAlarm+"";
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var touchScreenScramAlarmstr = msg.payload[length-6].toString(16);

    jsonobj.k="WIRE-85.TouchScreenScramAlarm";
    jsonobj.v=touchScreenScramAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var safetyDoorScramAlarmstr = msg.payload[length-5].toString(16);

    jsonobj.k="WIRE-85.SafetyDoorScramAlarm";
    jsonobj.v=safetyDoorScramAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm1str = msg.payload[length-4].toString(16);

    jsonobj.k="WIRE-85.HandsTopsScramAlarm1";
    jsonobj.v=handsTopsScramAlarm1str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var handsTopsScramAlarm2str = msg.payload[length-3].toString(16);

    jsonobj.k="WIRE-85.HandsTopsScramAlarm2";
    jsonobj.v=handsTopsScramAlarm2str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_85","currentdata":currentdatastr,"tcpdata":tcpdata})
}



//65
if(devid=='65' &&  length==40 && msg.payload[length-1].toString(16)=="fe"
    && msg.payload[length-2].toString(16)=="ef"){
    var systemNormalstr=msg.payload[length4].toString(16);
    jsonobj.k="WIRE-65.SystemNormal";
    jsonobj.v=systemNormalstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var mainMotorStartUpstr=msg.payload[6].toString(16);

    jsonobj.k="WIRE-65.MainMotorStartUp";
    jsonobj.v=mainMotorStartUpstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var mainMotorStopstr = msg.payload[8].toString(16);

    jsonobj.k="WIRE-65.MainMotorStop";
    jsonobj.v=mainMotorStopstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var lubricatingFaultX032str = msg.payload[10].toString(16);

    jsonobj.k="WIRE-65.LubricatingFaultX032";
    jsonobj.v=lubricatingFaultX032str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var camFaultstr = msg.payload[12].toString(16);

    jsonobj.k="WIRE-65.CamFault";
    jsonobj.v=camFaultstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var motorStartUpstr = msg.payload[14].toString(16);

    jsonobj.k="WIRE-65.MotorStartUp";
    jsonobj.v=motorStartUpstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var lubricatingFaultY024str = msg.payload[16].toString(16);

    jsonobj.k="WIRE-65.LubricatingFaultY024";
    jsonobj.v=lubricatingFaultY024str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var dualValveFaultstr = msg.payload[18].toString(16);

    jsonobj.k="WIRE-65.DualValveFault";
    jsonobj.v=dualValveFaultstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var abnormalAlarmstr = msg.payload[20].toString(16);

    jsonobj.k="WIRE-65.AbnormalAlarm";
    jsonobj.v=abnormalAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var seriesModelStartUpstr = msg.payload[22].toString(16);

    jsonobj.k="WIRE-65.SeriesModelStartUp";
    jsonobj.v=seriesModelStartUpstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var singleModelStartUpstr = msg.payload[24].toString(16);

    jsonobj.k="WIRE-65.SingleModelStartUp";
    jsonobj.v=singleModelStartUpstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var singleStartUpstr = msg.payload[26].toString(16);

    jsonobj.k="WIRE-65.SingleStartUp";
    jsonobj.v=singleStartUpstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var overRunAlarmstr = msg.payload[28].toString(16);

    jsonobj.k="WIRE-65.OverRunAlarm";
    jsonobj.v=overRunAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var lubricatingFaultSelfLockstr = msg.payload[30].toString(16);

    jsonobj.k="WIRE-65.LubricatingFaultSelfLock";
    jsonobj.v=lubricatingFaultSelfLockstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var photoelectricityProtectedAlarmstr = msg.payload[32].toString(16);

    jsonobj.k="WIRE-65.PhotoelectricityProtectedAlarm";
    jsonobj.v=photoelectricityProtectedAlarmstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var photoelectricityProtectedAlarmSelfLockstr = msg.payload[34].toString(16);

    jsonobj.k="WIRE-65.PhotoelectricityProtectedAlarmSelfLock";
    jsonobj.v=photoelectricityProtectedAlarmSelfLockstr;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"

    var lubricatingFaultM85str = msg.payload[36].toString(16);

    jsonobj.k="WIRE-65.LubricatingFaultM85";
    jsonobj.v=lubricatingFaultM85str;
    valuestr = valuestr+"(TO_TIMESTAMP('"+timestampstr+"'::text,'YYYY-MM-DD hh24:mi:ss')::timestamp at time zone 'UTC-8','07420630','"+JSON.stringify(jsonobj)+"'),";
    currentdatastr = currentdatastr+jsonobj.k+","+jsonobj.v+","+timestampstr+";"



    valuestr = valuestr.substring(0,valuestr.length-1);
    currentdatastr = currentdatastr.substring(0,currentdatastr.length-1);

    var sql = "insert into tcpmetadata values " + valuestr;
    var currentdata = "07420630,"+output+","+c201LeftDoor6Distinguish+","+c201RightDoor6Distinguish
        +","+v302LeftDoor5Distinguish+","+v302RightDoor5Distinguish+","+touchScreenScramAlarmstr
        +","+safetyDoorScramAlarmstr+","+robotAlarmstr+","+safetyDoorAlarmstr+","+timestampstr;

    node.send({"payload":sql,"currentname":"current_wire_85","currentdata":currentdatastr,"tcpdata":tcpdata})
}