export const SKELETON_ACTION = 'SKELETON_ACTION'

export function skeletonAction(param) {
  return {
    type: SKELETON_ACTION,
    payload: {
      name: param
    }
  }
}