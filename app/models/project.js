import { gt, filterBy } from '@ember/object/computed';
import { get, computed } from '@ember/object';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  approvalRequested: attr(),
  approved: attr(),
  canActivateDonations: attr(),
  closedTasksCount: attr('number'),
  cloudinaryPublicId: attr(),
  description: attr(),
  donationsActive: attr(),
  iconLargeUrl: attr(),
  iconThumbUrl: attr(),
  longDescriptionBody: attr(),
  longDescriptionMarkdown: attr(),
  openTasksCount: attr('number'),
  shouldLinkExternally: attr(),
  slug: attr(),
  title: attr(),
  totalMonthlyDonated: attr('dollar-cents'),
  website: attr(),

  organization: belongsTo('organization', { async: true }),
  stripeConnectPlan: belongsTo('stripe-connect-plan', { async: true }),

  categories: hasMany('category', { async: true }),
  donationGoals: hasMany('donation-goal', { async: true }),
  githubRepos: hasMany('github-repo', { async: true }),
  projectCategories: hasMany('project-category', { async: true }),
  projectSkills: hasMany('project-skill', { async: true }),
  projectUsers: hasMany('project-user', { async: true }),
  skills: hasMany('skill', { async: true }),
  taskLists: hasMany('task-list', { async: true }),
  tasks: hasMany('tasks', { async: true }),

  currentDonationGoal: computed('_currentGoals', function() {
    return get(this, '_currentGoals.firstObject');
  }),
  hasOpenTasks: gt('openTasksCount', 0),

  _currentGoals: filterBy('donationGoals', 'current', true)
});
