import { create } from 'zustand';

export const useStore = create((set) => ({
  myUser: {
    username: 'random',
    password: 'random1',
  },
  users: [],
  posts: [],
  register: (user) =>
    set((state) => ({ users: [...state.users, user], myUser: user })),
  setMyUser: (user) => set((state) => ({ myUser: user })),
}));

export const usePostStore = create((set) => ({
  posts: [],
  addPost: (newPost) => {
    const timestamp = Date.now();
    const id = `constantId-${timestamp}`;
    const updatedPost = { ...newPost, id };
    set((state) => ({ posts: [...state.posts, updatedPost] }));
  },

  setPosts: (updatedPosts) => set({ posts: updatedPosts }),
}));

export const useUserStore = create((set) => ({
  myUser: {
    username: 'random',
    password: 'random1',
  },
  users: [],
  register: (user) =>
    set((state) => ({ users: [...state.users, user], myUser: user })),
  setMyUser: (user) => set((state) => ({ myUser: user })),
}));
