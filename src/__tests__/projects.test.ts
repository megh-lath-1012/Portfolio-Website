import { describe, it, expect } from 'vitest';
import { projects } from '@/data/projects';

describe('Project Data Integrity', () => {
  it('should have a list of projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project should have required fields', () => {
    projects.forEach(project => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.category).toBeDefined();
    });
  });

  it('all projects should have a valid image path if defined', () => {
    projects.forEach(project => {
      if (project.image) {
        expect(project.image).toMatch(/^\/projects\/.+/);
      }
    });
  });
});
