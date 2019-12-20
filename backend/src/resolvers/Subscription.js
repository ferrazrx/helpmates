const NOTIFICATION_ADDED = "NOTIFICATION_ADDED";
import { withFilter } from "apollo-server";

const Subscription = {
  notificationAdded: {
    subscribe: withFilter(
      (rootValue, args, { pubsub }, info) => {
        return pubsub.asyncIterator([NOTIFICATION_ADDED]);
      },
      (payload, variables, { connection }, info) => {
        return connection.user === payload.notificationAdded.to.id;
      }
    )
  }
};

export { Subscription as default, NOTIFICATION_ADDED };
