import { API } from "../../backend";

export const createSkill = (userId, token, skill) => {
  return fetch(`${API}/skill/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(skill)
  })
    .then(response => {
      return response.json();
    })
     .catch(err => console.log(err));
};



export const createEducation = (userId, token, education) => {
  return fetch(`${API}/education/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(education)
  })
    .then(response => {
      return response.json();
    })
     .catch(err => console.log(err));
};


//get all skills
export const getSkills = () => {
  return fetch(`${API}/skills`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//projects calls

//create a project
export const createaProject = (userId, token, project) => {
  return fetch(`${API}/project/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body:  project
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all projects
export const getProjects = () => {
  return fetch(`${API}/projects`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//get all education
export const getAlleducation = () => {
  return fetch(`${API}/alleducation`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//delete a project

export const deleteProject = (projectId, userId, token) => {
  return fetch(`${API}/project/${projectId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// delete skills

export const deleteSkill = (skillId, userId, token ) => {
  return fetch(`${API}/skill/${skillId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};




//get a project

export const getProject = projectId => {
  return fetch(`${API}/project/${projectId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//get a skill
export const getSkill = skillId => {
  return fetch(`${API}/skill/${skillId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a education detail

export const getEducation = educationId => {
  return fetch(`${API}/education/${educationId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//update a project

export const updateProject= (projectId, userId, token, project) => {
  return fetch(`${API}/project/${projectId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: project
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//update skill

export const updateSkill = (skillId, userId, token , skill) => {
  return fetch(`${API}/skill/${skillId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type" : "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(skill)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update education


export const updateEducation = (educationId, userId, token , education) => {
  return fetch(`${API}/education/${educationId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type" : "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(education)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};