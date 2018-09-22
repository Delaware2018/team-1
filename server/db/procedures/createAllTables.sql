/****** Object:  StoredProcedure [dbo].[CreateAllTables]    Script Date: 9/22/2018 7:35:55 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      Level Up
-- Create Date: 9/22/18
-- Description: Create all necessary tables to run app for CodeForGood Be+
-- =============================================
CREATE PROCEDURE [dbo].[CreateAllTables]

AS
BEGIN
   
	
CREATE TABLE [dbo].[chapters](
	[chapterCode] [nvarchar](50) NULL,
	[chapterName] [nvarchar](50) NULL
) ON [PRIMARY]

CREATE TABLE [dbo].[donations](
	[donationID] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[type] [nvarchar](50) NOT NULL,
	[dateOfDonation] [nvarchar](50) NOT NULL,
	[amount] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_donations] PRIMARY KEY CLUSTERED 
(
	[donationID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

CREATE TABLE [dbo].[feeds](
	[feedID] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](50) NOT NULL,
	[feedName] [nvarchar](max) NULL,
	[feedContent] [nvarchar](max) NULL,
	[feedLocation] [nvarchar](max) NULL,
	[urlLink] [nvarchar](max) NULL,
	[feedDate] [nvarchar](max) NULL,
 CONSTRAINT [PK_feeds] PRIMARY KEY CLUSTERED 
(
	[feedID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]



CREATE TABLE [dbo].[subsciptions](
	[subscriptionID] [int] NULL,
	[subsciptionType] [nvarchar](50) NULL
) ON [PRIMARY]


CREATE TABLE [dbo].[usersTable](
	[userID] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](50) NOT NULL,
	[password] [nvarchar](565) NOT NULL,
	[fname] [nvarchar](50) NULL,
	[lname] [nvarchar](50) NULL,
	[email] [nvarchar](150) NULL,
	[memberSince] [nvarchar](50) NULL,
	[subscriptionID] [nvarchar](50) NULL,
	[subscriptionAmount] [decimal](18, 2) NULL,
	[ChapterMemberCode] [nvarchar](50) NULL,
 CONSTRAINT [PK_usersTable] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

END
GO

