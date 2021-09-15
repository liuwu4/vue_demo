<script>
export default {
  name: 'test',
  components: {},
  render(h) {
    return h(
      'test-fun',
      {
        scopedSlots: {
          default: (props) => {
            return h('h1', props.user);
          },
          header: () => {
            return h('h1', 'header');
          }
        }
      },
      [h('template', { slot: 'header' }, 'hello world'), h('template', { slot: 'footer' }, 'this is footer')]
    );
  }
};
</script>