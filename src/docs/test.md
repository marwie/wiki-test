:::: code-group
::: code-group-item ts
```ts
export class MyScript extends Behaviour {
    @serializable()
    myField : string;    
}
```
:::
::: code-group-item csharp
```csharp
public class MyScript : MonoBehaviour {
    public string myField;
}
```
:::
::::


<sample src="https://cdn.needle.tools/needle-engine/samples/screensharing" />