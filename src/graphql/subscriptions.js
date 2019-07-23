// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTalk = `subscription OnCreateTalk {
  onCreateTalk {
    id
    name
    speakerName
    speakerBio
    time
    location
    summary
    twitter
    github
    comments {
      items {
        id
        talkId
        message
        createdAt
        deviceId
      }
      nextToken
    }
  }
}
`;
export const onUpdateTalk = `subscription OnUpdateTalk {
  onUpdateTalk {
    id
    name
    speakerName
    speakerBio
    time
    location
    summary
    twitter
    github
    comments {
      items {
        id
        talkId
        message
        createdAt
        deviceId
      }
      nextToken
    }
  }
}
`;
export const onDeleteTalk = `subscription OnDeleteTalk {
  onDeleteTalk {
    id
    name
    speakerName
    speakerBio
    time
    location
    summary
    twitter
    github
    comments {
      items {
        id
        talkId
        message
        createdAt
        deviceId
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription onCreateCommentWithId($talkId: ID!) {
  onCreateCommentWithId(talkId: $talkId) {
    id
    talkId
    talk {
      id
      name
      speakerName
      speakerBio
      time
      location
      summary
      twitter
      github
      comments {
        nextToken
      }
    }
    message
    createdAt
    createdBy
    deviceId
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    talkId
    talk {
      id
      name
      speakerName
      speakerBio
      time
      location
      summary
      twitter
      github
      comments {
        nextToken
      }
    }
    message
    createdAt
    deviceId
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    talkId
    talk {
      id
      name
      speakerName
      speakerBio
      time
      location
      summary
      twitter
      github
      comments {
        nextToken
      }
    }
    message
    createdAt
    deviceId
  }
}
`;
export const onCreateReport = `subscription OnCreateReport {
  onCreateReport {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
export const onUpdateReport = `subscription OnUpdateReport {
  onUpdateReport {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
export const onDeleteReport = `subscription OnDeleteReport {
  onDeleteReport {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
