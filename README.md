# DS_lab9

## rs.status() result
```
{
	"set" : "rs0",
	"date" : ISODate("2019-10-31T18:12:43.445Z"),
	"myState" : 1,
	"term" : NumberLong(6),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"majorityVoteCount" : 2,
	"writeMajorityCount" : 2,
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1572545560, 1),
			"t" : NumberLong(6)
		},
		"lastCommittedWallTime" : ISODate("2019-10-31T18:12:40.171Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1572545560, 1),
			"t" : NumberLong(6)
		},
		"readConcernMajorityWallTime" : ISODate("2019-10-31T18:12:40.171Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1572545560, 1),
			"t" : NumberLong(6)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1572545560, 1),
			"t" : NumberLong(6)
		},
		"lastAppliedWallTime" : ISODate("2019-10-31T18:12:40.171Z"),
		"lastDurableWallTime" : ISODate("2019-10-31T18:12:40.171Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1572545501, 1),
	"lastStableCheckpointTimestamp" : Timestamp(1572545501, 1),
	"electionCandidateMetrics" : {
		"lastElectionReason" : "electionTimeout",
		"lastElectionDate" : ISODate("2019-10-31T18:12:20.043Z"),
		"termAtElection" : NumberLong(6),
		"lastCommittedOpTimeAtElection" : {
			"ts" : Timestamp(1572545521, 1),
			"t" : NumberLong(4)
		},
		"lastSeenOpTimeAtElection" : {
			"ts" : Timestamp(1572545521, 1),
			"t" : NumberLong(4)
		},
		"numVotesNeeded" : 2,
		"priorityAtElection" : 1,
		"electionTimeoutMillis" : NumberLong(10000),
		"numCatchUpOps" : NumberLong(27017),
		"newTermStartDate" : ISODate("2019-10-31T18:12:20.170Z"),
		"wMajorityWriteAvailabilityDate" : ISODate("2019-10-31T18:12:21.546Z")
	},
	"members" : [
		{
			"_id" : 0,
			"name" : "node1:27017",
			"ip" : "172.31.42.165",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 418,
			"optime" : {
				"ts" : Timestamp(1572545560, 1),
				"t" : NumberLong(6)
			},
			"optimeDate" : ISODate("2019-10-31T18:12:40Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "could not find member to sync from",
			"electionTime" : Timestamp(1572545540, 1),
			"electionDate" : ISODate("2019-10-31T18:12:20Z"),
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "node2:27017",
			"ip" : "172.31.33.72",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 27,
			"optime" : {
				"ts" : Timestamp(1572545560, 1),
				"t" : NumberLong(6)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1572545560, 1),
				"t" : NumberLong(6)
			},
			"optimeDate" : ISODate("2019-10-31T18:12:40Z"),
			"optimeDurableDate" : ISODate("2019-10-31T18:12:40Z"),
			"lastHeartbeat" : ISODate("2019-10-31T18:12:42.050Z"),
			"lastHeartbeatRecv" : ISODate("2019-10-31T18:12:41.547Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "node1:27017",
			"syncSourceHost" : "node1:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		},
		{
			"_id" : 2,
			"name" : "node3:27017",
			"ip" : "172.31.46.208",
			"health" : 0,
			"state" : 8,
			"stateStr" : "(not reachable/healthy)",
			"uptime" : 0,
			"optime" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(0, 0),
				"t" : NumberLong(-1)
			},
			"optimeDate" : ISODate("1970-01-01T00:00:00Z"),
			"optimeDurableDate" : ISODate("1970-01-01T00:00:00Z"),
			"lastHeartbeat" : ISODate("2019-10-31T18:12:42.058Z"),
			"lastHeartbeatRecv" : ISODate("2019-10-31T18:09:20.667Z"),
			"pingMs" : NumberLong(0),
			"lastHeartbeatMessage" : "Error connecting to node3:27017 (172.31.46.208:27017) :: caused by :: Connection refused",
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "",
			"configVersion" : -1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1572545560, 1),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1572545560, 1)
}
```

## rs.config() result
```
{
	"_id" : "rs0",
	"version" : 1,
	"protocolVersion" : NumberLong(1),
	"writeConcernMajorityJournalDefault" : true,
	"members" : [
		{
			"_id" : 0,
			"host" : "node1:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 1,
			"host" : "node2:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		},
		{
			"_id" : 2,
			"host" : "node3:27017",
			"arbiterOnly" : false,
			"buildIndexes" : true,
			"hidden" : false,
			"priority" : 1,
			"tags" : {
				
			},
			"slaveDelay" : NumberLong(0),
			"votes" : 1
		}
	],
	"settings" : {
		"chainingAllowed" : true,
		"heartbeatIntervalMillis" : 2000,
		"heartbeatTimeoutSecs" : 10,
		"electionTimeoutMillis" : 10000,
		"catchUpTimeoutMillis" : -1,
		"catchUpTakeoverDelayMillis" : 30000,
		"getLastErrorModes" : {
			
		},
		"getLastErrorDefaults" : {
			"w" : 1,
			"wtimeout" : 0
		},
		"replicaSetId" : ObjectId("5db8680a34cb14bac0f664b2")
	}
}
```
![Front screenshot](https://github.com/AkkyMa/DS_lab9/blob/master/chat.png)
