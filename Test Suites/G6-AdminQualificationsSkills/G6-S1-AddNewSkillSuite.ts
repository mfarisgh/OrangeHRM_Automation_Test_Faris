<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>G6-S1-AddNewSkillSuite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>e8d4e7fd-8df8-4c17-b10c-b99d28ad9faf</testSuiteGuid>
   <testCaseLink>
      <guid>4f082ff0-0f7e-44fe-994e-50bc0cb892f0</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/G6-AdminQualificationsSkills/G6-S1-AddNewSkill/G6-S1-TC1-Successfully added new skill name (with DDT)</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>89178732-f767-442d-8565-b39530cdb61a</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/addNewSkills</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>89178732-f767-442d-8565-b39530cdb61a</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>skillName</value>
         <variableId>b590423a-8546-4899-be86-0b01f39512c6</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>89178732-f767-442d-8565-b39530cdb61a</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>skillDescription</value>
         <variableId>9faebdf0-97a4-4655-afda-beeced12e799</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>b9c8ae0c-5779-42dd-af03-d29157546784</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/G6-AdminQualificationsSkills/G6-S1-AddNewSkill/G6-S1-TC2-Users enter the same skill name</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>ca366841-8e7e-470f-985d-b6c00268ab78</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>a8b8f79c-fe62-427f-8f44-d74398439a75</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/G6-AdminQualificationsSkills/G6-S1-AddNewSkill/G6-S1-TC3-User did not enter skill name</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>9c8ae898-e577-41fc-ad96-58b78862976f</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>