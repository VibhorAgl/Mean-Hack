// import { environment } from '../../environments/environment';

export const baseUrl = 'http://localhost:3000/api';
// export const baseUrl = 'https://sv-giapi.azurewebsites.net/api';

export  const deleteMessage = `Course removed from library`;
export  const AddMessage = `Course added  to  library successfully`;
export  const inactiveMessage = `Oops..!! Seems like you are trying to bookmark inactive courses.`;
export  const courseRemoved = `Course has been successfully removed from the mentioned role.`;
export  const workflowcourseRemoved = `Course has been successfully removed from the mentioned workflow.`;
export  const roleAdded = `New role has been added`;
export  const workflowAdded = `New workflow has been added`;

export  const roleCourseArrange = `Course arrrangement is successfully saved for the chosen role.`;
export  const courseAddedRole = `Course is added to the role. You can reorder the courses by clicking on Go To Role button`;
export  const courseDeleteRole = `Course is deleted from the role. You can reorder the courses by clicking on Go To Role button`;

export const saveChange = 'Changes saved.';

export const roleDelete = ' Role is deleted successfully.';
export const workflowDelete = ' Workflow is deleted successfully.';


export  const courseAddedWorkflow = `Course is added to the workflow.
 You can reorder the courses by clicking on Go To Workflow button`;
export  const courseDeleteWorkflow =
 `Course is deleted from the workflow.You can reorder the courses by clicking on Go To Workflow button`;
export  const workflowcourseArrange = `Course arrrangement is successfully saved for the chosen workflow.`;
export  const messageDuration = `900`;





export const videoUrl = baseUrl + '/videos';

export const rolesUrl = baseUrl + '/roles';

export const workflowUrl = baseUrl + '/workflows';

export const sliderUrl = baseUrl + '/sliders';

export const filterUrl = baseUrl + '/courses/filters';

export const searchUrl = baseUrl + '/courses/search';

export const bookmarkUrl = baseUrl + '/users';

export const bookmarkgetUrl = baseUrl + '/users/bookmarks';

export const bookmarkAddUrl = baseUrl + '/users/add';


export const bookmarkdeleteUrl = baseUrl + '/users/delete';


export const checkIfUserIsAdminUrl = baseUrl + '/CheckIfUserMemberOfAdminGroup';