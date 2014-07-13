CREATE TABLE `materials` (
`UUID` char(36) NOT NULL,
`TypeID` char(36) NOT NULL,
`Name` varchar(200) NULL,
`PublishDate` datetime NULL,
`CreateDate` datetime NULL,
`Status` int NULL,
`Brand` varchar(200) NULL,
PRIMARY KEY (`UUID`) 
);

CREATE TABLE `attributes` (
`UUID` char(36) NULL,
`MaterialID` char(36) NULL,
`Key` varchar(200) NULL,
`Value` varchar(2000) NULL,
`Value2` decimal NULL,
`Status` int NULL,
`CreateDate` datetime NULL,
`Type` int NULL,
PRIMARY KEY (`UUID`) 
);

CREATE TABLE `types` (
`UUID` char(36) NULL,
`Name` varchar(200) NULL,
PRIMARY KEY (`UUID`) 
);

CREATE TABLE `bom` (
`ParentID` char(36) NULL,
`ChildID` char(36) NULL,
`Usage` float NULL,
PRIMARY KEY (`ParentID`, `ChildID`) 
);

