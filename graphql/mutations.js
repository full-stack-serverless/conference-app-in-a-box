// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTalk = `mutation CreateTalk($input: CreateTalkInput!) {
  createTalk(input: $input) {
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
export const updateTalk = `mutation UpdateTalk($input: UpdateTalkInput!) {
  updateTalk(input: $input) {
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
export const deleteTalk = `mutation DeleteTalk($input: DeleteTalkInput!) {
  deleteTalk(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    talkId
    message
    createdAt
    createdBy
    deviceId
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createReport = `mutation CreateReport($input: CreateReportInput!) {
  createReport(input: $input) {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
export const updateReport = `mutation UpdateReport($input: UpdateReportInput!) {
  updateReport(input: $input) {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
export const deleteReport = `mutation DeleteReport($input: DeleteReportInput!) {
  deleteReport(input: $input) {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
