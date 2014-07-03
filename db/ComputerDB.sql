CREATE TABLE `materials` (
`GUID` char(32) NOT NULL,
`TypeID` char(32) NOT NULL,
`Name` varchar(200) NULL,
`PublishDate` datetime NULL,
`CreateDate` datetime NULL,
`Status` int NULL,
`Brand` varchar(200) NULL,
PRIMARY KEY (`GUID`) 
);

CREATE TABLE `attributes` (
`GUID` char(32) NULL,
`MaterialID` char(32) NULL,
`Key` varchar(200) NULL,
`Value` varchar(2000) NULL,
`Value2` decimal NULL,
`Status` int NULL,
`CreateDate` datetime NULL,
`Type` int NULL,
PRIMARY KEY (`GUID`) 
);

CREATE TABLE `types` (
`GUID` char(32) NULL,
`Name` varchar(200) NULL,
PRIMARY KEY (`GUID`) 
);

CREATE TABLE `bom` (
`ParentID` char(32) NULL,
`ChildID` char(32) NULL,
`Usage` float NULL,
PRIMARY KEY (`ParentID`, `ChildID`) 
);

