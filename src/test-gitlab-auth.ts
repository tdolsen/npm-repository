import SinopiaGitlab from "sinopia-gitlab";

// Initialize
var sinopiaGitlab = SinopiaGitlab(
  {
    // your configuration goes here
    gitlab_project_prefix: "",
    gitlab_use_scope_as_group: false,
    gitlab_namespaces: [],
    gitlab_retain_group: false
  },
  {
    // Set environment to test config
    _test_config: true
  }
);

// Run test
var packageName = "@ns/scope-name";
sinopiaGitlab._testConfig(packageName, function(err, result) {
  // Check the conversion result
  console.log(result);
});
