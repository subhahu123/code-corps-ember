import { set } from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import PageObject from 'ember-cli-page-object';
import component from 'code-corps-ember/tests/pages/components/project-list';

let page = PageObject.create(component);

moduleForComponent('project-list', 'Integration | Component | project list', {
  integration: true,
  beforeEach() {
    page.setContext(this);
  },
  afterEach() {
    page.removeContext();
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{project-list}}`);

  assert.equal(this.$('.project-list').length, 1, 'The component\'s element is rendered');
});

test('it renders an item for each project in the list', function(assert) {
  assert.expect(1);

  let mockProjects = [];
  for (let i = 0; i < 3; i++) {
    mockProjects.push({ id: i, title: `Project ${i}`, slug: `project_${i}` });
  }

  set(this, 'projects', mockProjects);
  this.render(hbs`{{project-list projects=projects}}`);

  assert.equal(this.$('.project-item').length, 3, 'The correct number of project-items is rendered');
});

test('it sorts the list by id', function(assert) {
  assert.expect(3);

  let mockProjects = [];
  let mockProjectIds = [1, 3, 2];

  mockProjectIds.forEach(function(id) {
    mockProjects.push({ id, title: `Project ${id}`, slug: `project_${id}` });
  });

  set(this, 'projects', mockProjects);
  this.render(hbs`{{project-list projects=projects}}`);

  for (let i = 0; i < 3; i++) {
    let id = i + 1;
    assert.equal(page.items.objectAt(i).text, `Project ${id}`);
  }
});
