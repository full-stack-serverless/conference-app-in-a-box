// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTalk = `query GetTalk($id: ID!) {
  getTalk(id: $id) {
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
export const listTalks = `query ListTalks {
  listTalks(limit: 500) {
    items {
      id
      name
      speakerName
      speakerBio
      time
      speakerAvatar
      location
      summary
      timeStamp
      date
      twitter
      github
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      message
      createdAt
      deviceId
    }
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    commentId
    comment
    talkTitle
    deviceId
  }
}
`;
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      commentId
      comment
      talkTitle
      deviceId
    }
    nextToken
  }
}
`;

export const listCommentsByTalkId = `query listCommentsByTalkId($talkId: ID!) {
  listCommentsByTalkId(talkId: $talkId) {
    items {
      message
      createdAt
      createdBy
    }
  }
}`