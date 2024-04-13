import React, { useState } from "react";
import { Box, Heading, Input, Button, Textarea, Select, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Code, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csv = e.target.result;
      const rows = csv.split("\n").slice(1); // Skip header row
      const data = rows.map((row) => {
        const values = row.split(",");
        const [path, id, created, updated, codeBlocks, commitSha, createdAt, createdBy, errorMessage, errorType, editId, messages, numOfEdits, editNumber, prompt, response, revertTargetEditId, reverted, screenshotUrl, status, tagsJson, type] = values;

        let tags = {};
        try {
          tags = JSON.parse(tagsJson.replace(/^"(.*)"$/, "$1"));
        } catch (e) {
          console.error(`Failed to parse tags JSON: ${tagsJson}`);
        }

        return {
          path,
          id,
          created,
          updated,
          codeBlocks,
          commitSha,
          createdAt,
          createdBy,
          errorMessage,
          errorType,
          editId,
          messages,
          numOfEdits,
          editNumber,
          prompt,
          response,
          revertTargetEditId,
          reverted,
          screenshotUrl,
          status,
          tags,
          type,
        };
      });
      setCsvData(data);
    };

    reader.readAsText(file);
  };

  const getUniqueProjects = () => {
    const uniqueProjects = new Set();
    csvData.forEach((row) => {
      const projectId = row.path.split("/")[1];
      uniqueProjects.add(projectId);
    });
    return Array.from(uniqueProjects);
  };

  const filterDataByProject = (projectId) => {
    return csvData.filter((row) => row.path.includes(projectId));
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" marginBottom={8}>
        Project Data Viewer
      </Heading>

      <VStack align="stretch" spacing={8}>
        <Input type="file" onChange={handleFileUpload} />

        <Select placeholder="Select a project" value={selectedProject} onChange={handleProjectChange}>
          {getUniqueProjects().map((projectId) => (
            <option key={projectId} value={projectId}>
              {projectId}
            </option>
          ))}
        </Select>

        {selectedProject && (
          <Box>
            <Heading as="h2" size="lg" marginBottom={4}>
              Edits for Project: {selectedProject}
            </Heading>

            <Accordion allowMultiple>
              {filterDataByProject(selectedProject)
                .sort((a, b) => new Date(a.created) - new Date(b.created))
                .map((edit) => (
                  <AccordionItem key={edit.editId}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Edit ID: {edit.editId}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack align="stretch">
                        {edit.tags.output && (
                          <Box>
                            <Heading size="md" mb={2}>
                              Code:
                            </Heading>
                            <Code whiteSpace="pre" p={4} borderRadius="md" backgroundColor="gray.100">
                              {edit.tags.output}
                            </Code>
                          </Box>
                        )}
                        {edit.status !== "failed" && (
                          <Text>
                            <b>Commit SHA:</b> {edit.commitSha}
                          </Text>
                        )}
                        <Text>
                          <b>Created At:</b> {edit.createdAt}
                        </Text>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
