/****** Object:  StoredProcedure [dbo].[populateUsersTable]    Script Date: 9/22/2018 9:33:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <Author, , Name>
-- Create Date: <Create Date, , >
-- Description: <Description, , >
-- =============================================
CREATE PROCEDURE [dbo].[populateUsersTable]



AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

   insert into usersTable
   values('vdkremezis','1234','dimitris','kremezis', 'vdkremezis@gmail.com', 'Sep 21 2018 12:00AM', NULL, NULL, 'A1000'),
		  ('codi','1234', 'Codi','Bisram', 'cBisram@gmail.com',	'2018-09-20',NULL, NULL, 'A2000'),
		  ('qHossain', '4321', 'Quazi', 'Hossain', 'qHossain@gmail.com', '2018-09-18', NULL, NULL, 'A1000'),
		  ('sJava', '4321','Syed','Javaid','sjava@gmail.com','2018-09-15',	NULL,	NULL, 'A3000'),
		  ('eHu','1234','Eric',	'Hu', 'ehu@gmail.com','2018-09-20',	NULL, NULL, 'A4000')

END
GO

