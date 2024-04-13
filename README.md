# project-data-viewer

I want you to create an internal tool that allows user to upload a csv file containg data about projects and a series of edits. Here is an example of the data.

User should be able to:
-  select (dropdown) and filter by project ID (the first id in the path) and then see all the code edits in order of creation
- each edit, should show the code blocks with pretty print
- each edit (if status is not failed) should also diplay the commit sha

Here is an example of the first rows of the CSV:

__path__	__id__	__created__	__updated__	code_blocks	commit_sha	created_at	created_by	error_message	error_type	id	messages	num_of_edits	number	prompt	response	revert_target_edit_id	reverted	screenshot_url	status	tags	type
projects/4bf60c84-bc8f-4691-b5e1-ea66da4e0578/edits/e5f3caa3-8218-4892-a851-8d2f26818ce8	e5f3caa3-8218-4892-a851-8d2f26818ce8	2024-04-12T23:59:22.425500Z	2024-04-12T23:59:37.941774Z	null	7b56d4c08d22b72ff7abd6dd572770e23390fdc8	2024-04-12T23:59:22.402Z	GPT Engineer	null	null	e5f3caa3-8218-4892-a851-8d2f26818ce8	null	null	null	null	null	null	false	https://storage.googleapis.com/gpt-engineer-screenshots/id-preview-7b56d4c0--4bf60c84-bc8f-4691-b5e1-ea66da4e0578.gptengineer.run-1712966377215.png	completed	{"summary":"- Created a new `ProjectData` component to handle loading and displaying project data\n- Added a form to input project ID and load data\n- Displayed edit metadata and code blocks with expand/collapse \n- Used Chakra UI components for layout and styling\n- Updated `Index` to render `ProjectData`\n- Added some sample data for testing\n\nLet me know if you have any other questions!"}	ai_update
projects/abbdbe3b-8fc2-4fe3-9e61-23457900238a/edits/1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6	1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6	2024-04-12T23:53:44.620090Z	2024-04-12T23:53:48.991163Z	null	8326f96808f2a9c671ae3a6eb1518423303bbc82	2024-04-12T23:53:41.000Z	null	null	null	1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6	null	null	null	Landing page for a SaaS business	null	null	false	https://storage.googleapis.com/gpt-engineer-screenshots/id-preview-8326f968--abbdbe3b-8fc2-4fe3-9e61-23457900238a.gptengineer.run-1712966028141.png	completed	null	initial
<agent-started>
main-agent
</agent-started>
<think>
To implement this internal tool, I will:
1. Create a form to allow uploading a CSV file 
2. Parse the CSV data and store it in state
3. Add a dropdown to select a project ID
4. Display the edits for the selected project, showing the code blocks, commit SHA, and other metadata
5. Use Chakra UI components for the layout and styling
</think>
<implement>
<request>
Implement an internal tool for viewing project data from a CSV file, with the following features:

- A form to upload a CSV file
- Parse the CSV data and store it in component state 
- Add a dropdown to select a project ID. Populate it with the unique project IDs from the CSV data
- When a project is selected, display a list of all the edits for that project, in order of creation
- For each edit, display:
  - The code blocks (if present), with syntax highlighting 
  - The commit SHA (if status is not failed)
  - The created at timestamp 
  - The edit ID
- Allow each edit's code block to be expanded/collapsed
- Use Chakra UI components for the layout and form elements

You can use this CSV data for testing:

__path__,__id__,__created__,__updated__,code_blocks,commit_sha,created_at,created_by,error_message,error_type,id,messages,num_of_edits,number,prompt,response,revert_target_edit_id,reverted,screenshot_url,status,tags,type
projects/4bf60c84-bc8f-4691-b5e1-ea66da4e0578/edits/e5f3caa3-8218-4892-a851-8d2f26818ce8,e5f3caa3-8218-4892-a851-8d2f26818ce8,2024-04-12T23:59:22.425500Z,2024-04-12T23:59:37.941774Z,null,7b56d4c08d22b72ff7abd6dd572770e23390fdc8,2024-04-12T23:59:22.402Z,GPT Engineer,null,null,e5f3caa3-8218-4892-a851-8d2f26818ce8,null,null,null,null,null,null,false,https://example.com/screenshot1.png,completed,"{""summary"":""- Created a new `ProjectData` component to handle loading and displaying project data\n- Added a form to input project ID and load data\n- Displayed edit metadata and code blocks with expand/collapse \n- Used Chakra UI components for layout and styling\n- Updated `Index` to render `ProjectData`\n- Added some sample data for testing\n\nLet me know if you have any other questions!""}",ai_update
projects/abbdbe3b-8fc2-4fe3-9e61-23457900238a/edits/1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6,1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6,2024-04-12T23:53:44.620090Z,2024-04-12T23:53:48.991163Z,null,8326f96808f2a9c671ae3a6eb1518423303bbc82,2024-04-12T23:53:41.000Z,null,null,null,1b1bbfa4-5f7b-4d11-b1af-d541a2941ee6,null,null,null,Landing page for a SaaS business,null,null,false,https://example.com/screenshot2.png,completed,null,initial
</request>
<base-branch>vite</base-branch>
<new-branch>project-data-viewer</new-branch>
</implement>
I'm working on implementing the internal tool to view project data from a CSV file. It will have a form to upload the CSV, a dropdown to select a project, and will display the edits for the selected project.

I'll let you know once I have the first version ready for you to try out.
<agent-finished>
main-agent
</agent-finished>
<implement-success>
<response>
SUMMARY:
Removed papaparse import and implemented manual CSV parsing using FileReader to fix the unresolved module error.
</response>
<branch>project-data-viewer</branch>
</implement-success>
<build-success>
<branch>project-data-viewer</branch>
</build-success>
#0
Previewing


SUMMARY:
Removed papaparse import and implemented manual CSV parsing using FileReader to fix the unresolved module error.
<push-success>
<branch>project-data-viewer</branch>
<commit-hash>0a3fdfc4</commit-hash>
</push-success>
<agent-started>
main-agent
</agent-started>
<agent-finished>
main-agent
</agent-finished>
The first version of the project data viewer is ready! You should see it in the GPT Engineer UI now.

It has a form where you can upload a CSV file containing the project data. Once uploaded, you can select a project ID from the dropdown to view all the edits for that project.

Each edit shows the code blocks (if any), commit SHA, creation timestamp, and edit ID. The code blocks can be expanded/collapsed.

Let me know if you have any feedback or additional requirements!
For the code part rely on the content of output attrobute inside the json contained in tags
<agent-started>
main-agent
</agent-started>
<think>
Okay, so instead of using the code_blocks column directly, I need to parse the JSON in the tags column and use the output attribute from that for displaying the code.
</think>
Message GPT Engineer



preview--project-code-edit-viewer.gpt-eng.com/
Enter mobile preview mode


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/project-data-viewer.git
cd project-data-viewer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
